import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { btButtonModule, BtDividerModule } from "dls-angular"
import {
  getFilteredGruposTableDataAsync,
  type GrupoTableItem,
  type GruposTableData,
} from "../../mocks/grupos-table.mock"

@Component({
  selector: "app-table-component",
  standalone: true,
  imports: [CommonModule, btButtonModule, BtDividerModule],
  templateUrl: "./table-component.component.html",
  styleUrls: ["./table-component.component.scss"],
})
export class TableComponentComponent implements OnInit {
  gruposTableData: GruposTableData = { items: [], totalItems: 0, currentPage: 1, itemsPerPage: 8, totalPages: 0 }
  isLoadingTable = false
  error: string | null = null

  // Pagination state
  currentPage = 1
  itemsPerPage = 8
  pageSizeOptions = [8, 16, 24, 32]

  // Sorting state
  sortColumn: keyof GrupoTableItem | null = null
  sortDirection: "asc" | "desc" = "asc"

  // Filter state
  searchTerm = ""
  statusFilter: "all" | "active" | "inactive" = "all"

  ngOnInit(): void {
    this.loadGruposTableData()
  }

  /**
   * Load grupos table data (simulating API call)
   */
  private async loadGruposTableData(): Promise<void> {
    try {
      this.isLoadingTable = true
      this.error = null
      this.gruposTableData = await getFilteredGruposTableDataAsync(
        this.currentPage,
        this.itemsPerPage,
        this.searchTerm,
        this.statusFilter,
      )
    } catch (error) {
      console.error("Error loading grupos table data:", error)
      this.error = "Erro ao carregar dados da tabela. Tente novamente."
    } finally {
      this.isLoadingTable = false
    }
  }

  /**
   * Refresh table data
   */
  async refreshTable(): Promise<void> {
    await this.loadGruposTableData()
  }

  /**
   * TrackBy function for better performance with *ngFor
   */
  trackByGrupoTableItem(index: number, item: GrupoTableItem): string {
    return item.id
  }

  /**
   * Handle table actions
   */
  onEditGrupo(grupo: GrupoTableItem): void {
    console.log("Editing grupo:", grupo.nomeGrupo)
    // Implementation would navigate to edit page or open modal
    // this.router.navigate(['/grupos', grupo.id, 'edit']);
  }

  onToggleGrupoStatus(grupo: GrupoTableItem): void {
    console.log("Toggling status for grupo:", grupo.nomeGrupo)
    // Implementation would call API to toggle status
    grupo.ativo = !grupo.ativo
    grupo.dataUltimaModificacao = new Date()
  }

  onViewGrupoHistory(grupo: GrupoTableItem): void {
    console.log("Viewing history for grupo:", grupo.nomeGrupo)
    // Implementation would navigate to history page or open modal
    // this.router.navigate(['/grupos', grupo.id, 'history']);
  }

  onViewGrupoDetails(grupo: GrupoTableItem): void {
    console.log("Viewing details for grupo:", grupo.nomeGrupo)
    // Implementation would navigate to details page
    // this.router.navigate(['/grupos', grupo.id]);
  }

  /**
   * Format lateralidade for display
   */
  formatLateralidade(lateralidade: { codigo: string; funcionario: string }): string {
    return `${lateralidade.codigo} - ${lateralidade.funcionario}`
  }

  /**
   * Format date for display
   */
  formatDate(date: Date): string {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  /**
   * Handle column sorting
   */
  onSort(column: keyof GrupoTableItem): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc"
    } else {
      this.sortColumn = column
      this.sortDirection = "asc"
    }
    // Note: In a real app, you'd send sort parameters to the API
    // For now, we'll just reload the data
    this.loadGruposTableData()
  }

  /**
   * Get sort icon for column
   */
  getSortIcon(column: keyof GrupoTableItem): string {
    if (this.sortColumn !== column) {
      return "↕️"
    }
    return this.sortDirection === "asc" ? "↑" : "↓"
  }

  /**
   * Handle search input
   */
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement
    this.searchTerm = target.value
    this.currentPage = 1 // Reset to first page when searching
    this.loadGruposTableData()
  }

  /**
   * Handle status filter change
   */
  onStatusFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement
    this.statusFilter = target.value as "all" | "active" | "inactive"
    this.currentPage = 1 // Reset to first page when filtering
    this.loadGruposTableData()
  }

  /**
   * Handle page size change
   */
  onPageSizeChange(event: Event): void {
    const target = event.target as HTMLSelectElement
    this.itemsPerPage = Number.parseInt(target.value, 10)
    this.currentPage = 1 // Reset to first page when changing page size
    this.loadGruposTableData()
  }

  /**
   * Clear all filters
   */
  clearFilters(): void {
    this.searchTerm = ""
    this.statusFilter = "all"
    this.sortColumn = null
    this.sortDirection = "asc"
    this.currentPage = 1
    this.loadGruposTableData()
  }

  /**
   * Pagination methods
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.gruposTableData.totalPages) {
      this.currentPage = page
      this.loadGruposTableData()
    }
  }

  goToFirstPage(): void {
    this.goToPage(1)
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage - 1)
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage + 1)
  }

  goToLastPage(): void {
    this.goToPage(this.gruposTableData.totalPages)
  }

  /**
   * Get page numbers for pagination display
   */
  getPageNumbers(): number[] {
    const totalPages = this.gruposTableData.totalPages
    const currentPage = this.currentPage
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  /**
   * Get status badge class
   */
  getStatusBadgeClass(ativo: boolean): string {
    return ativo ? "status-badge status-badge--active" : "status-badge status-badge--inactive"
  }

  /**
   * Get status text
   */
  getStatusText(ativo: boolean): string {
    return ativo ? "Ativo" : "Inativo"
  }

  /**
   * Get pagination info text
   */
  getPaginationInfo(): string {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1
    const end = Math.min(this.currentPage * this.itemsPerPage, this.gruposTableData.totalItems)
    const total = this.gruposTableData.totalItems

    if (total === 0) {
      return "Nenhum resultado encontrado"
    }

    return `Mostrando ${start} a ${end} de ${total} grupos`
  }
}

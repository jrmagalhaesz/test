import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { btButtonModule, BtDividerModule, BtReadOnlyModule, BtTextFieldModule } from "dls-angular"

// Interfaces for type safety and better data modeling
interface Funcionario {
  id: string
  nome: string
  unidadeJuridica: string
}

interface Consulente {
  id: string
  unidadeJuridica: string
}

interface GrupoData {
  id: string
  nome: string
  grupoTrabalho: string
  unidadeJuridica: string
  funcionario: string
  justificativa: string
  funcionarios: Funcionario[]
  consulentes: Consulente[]
}

@Component({
  selector: "app-visualizar-grupo",
  standalone: true,
  imports: [CommonModule, btButtonModule, BtDividerModule, BtReadOnlyModule, BtTextFieldModule],
  templateUrl: "./visualizar-grupo.component.html",
  styleUrls: ["./visualizar-grupo.component.scss"],
})
export class VisualizarGrupoComponent implements OnInit {
  grupoData: GrupoData = this.createMockData()

  ngOnInit(): void {
    // Here you would typically load data from a service
    // this.loadGrupoData();
  }

  /**
   * Creates mock data with proper structure for development/testing
   * This method simulates what would come from an API
   */
  private createMockData(): GrupoData {
    return {
      id: "1",
      nome: "VARIAVEL",
      grupoTrabalho: "Nível 1",
      unidadeJuridica: "BT28 - JURIDICO",
      funcionario: "B2C3 - JOHN DOE",
      justificativa:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      funcionarios: [
        {
          id: "1",
          nome: "B2C4 - MARIA DOE",
          unidadeJuridica: "BT28 - JURIDICO",
        },
        {
          id: "2",
          nome: "B2C5 - PEDRO SILVA",
          unidadeJuridica: "BT28 - JURIDICO",
        },
      ],
      consulentes: [
        {
          id: "1",
          unidadeJuridica: "BT28 - CONTADORIA",
        },
      ],
    }
  }

  /**
   * TrackBy functions for better performance with *ngFor
   */
  trackByFuncionario(index: number, funcionario: Funcionario): string {
    return funcionario.id
  }

  trackByConsulente(index: number, consulente: Consulente): string {
    return consulente.id
  }

  /**
   * Handle back button click
   * In a real application, this would navigate to the previous page
   */
  onVoltar(): void {
    // Implementation would depend on your routing strategy
    // this.router.navigate(['/grupos']);
    // or
    // this.location.back();
    console.log("Navigating back...")
  }

  /**
   * Method to load real data from a service
   * Uncomment and implement when integrating with backend
   */
  // private async loadGrupoData(): Promise<void> {
  //   try {
  //     this.grupoData = await this.grupoService.getGrupoById(this.grupoId);
  //   } catch (error) {
  //     console.error('Error loading grupo data:', error);
  //     // Handle error appropriately
  //   }
  // }
}

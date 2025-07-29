import { Component } from "@angular/core"

interface Ticket {
  id: string
  type: string
  price: number
  available: number
  total: number
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Sistema de Venda de Ingressos"

  tickets: Ticket[] = [
    {
      id: "1",
      type: "Pista",
      price: 80,
      available: 100,
      total: 100,
    },
    {
      id: "2",
      type: "Cadeira Superior",
      price: 120,
      available: 50,
      total: 50,
    },
    {
      id: "3",
      type: "Cadeira Inferior",
      price: 100,
      available: 75,
      total: 75,
    },
  ]

  message = ""

  buyTicket(ticketId: string) {
    const ticket = this.tickets.find((t) => t.id === ticketId)
    if (ticket) {
      if (ticket.available > 0) {
        ticket.available--
        this.setMessage(`Ingresso ${ticket.type} comprado com sucesso! R$ ${ticket.price}`)
      } else {
        this.setMessage("Ingresso esgotado!")
      }
    }
  }

  resetTickets() {
    this.tickets = [
      { id: "1", type: "Pista", price: 80, available: 100, total: 100 },
      { id: "2", type: "Cadeira Superior", price: 120, available: 50, total: 50 },
      { id: "3", type: "Cadeira Inferior", price: 100, available: 75, total: 75 },
    ]
    this.setMessage("Ingressos resetados!")
  }

  private setMessage(msg: string) {
    this.message = msg
    setTimeout(() => {
      this.message = ""
    }, 3000)
  }

  getSoldPercentage(ticket: Ticket): number {
    return ((ticket.total - ticket.available) / ticket.total) * 100
  }
}

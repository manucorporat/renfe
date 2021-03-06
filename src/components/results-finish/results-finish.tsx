import { Component, Prop, h } from "@stencil/core";
import { Journey, Person } from "../../pages/results-page/results-page";
import { sendJSON } from "../../utils/utils";

@Component({
  tag: 'results-finish',
  styleUrl: 'results-finish.scss'
})
export class ResultsFinish {

  @Prop() people: Person[] = [];
  @Prop() departure: Journey = null;
  @Prop() arrival: Journey = null;

  getTickets() {
    const journeys = [this.departure, this.arrival].filter(j => !!j);
    const tickets = [];
    for (let journey of journeys) {
      for (let person of this.people) {
        tickets.push({
          'journey_id': journey.id,
          "used": 1,
          "day": journey.day,
          "dni": person.dni,
          "name": person.name,
          "surname": person.surname,
          "phone": person.phone,
          "email": person.email
        });
      }
    }
    return tickets;
  }

  async onPay() {
    const PaymentRequest = (window as any).PaymentRequest;
    if (PaymentRequest) {
      const supportedPaymentMethods = [{
        supportedMethods: 'basic-card',
      }
      ];
      const allDisplayItems = [];
      const paymentDetails = {
        total: {
          label: '',
          amount: {
            currency: 'EUR',
            value: '123.22',
          },
        },
        displayItems: allDisplayItems,
      };

      const req = new PaymentRequest(
        supportedPaymentMethods,
        paymentDetails
      );
      try {
        await req.show();
      } catch { }
    } else {
      console.error('payment is not available');
    }
    try {
      const tickets = this.getTickets();
      const response = await sendJSON('buy.php', tickets);

      if (response.message === 'OK') {
        alert("Comprado con exito");
      } else {
        alert(response.message);
      }
    } catch(e) {
      alert(e);
    }
  }

  render() {
    const tickets = this.getTickets();
    const people = tickets.map((ticket) => {
      return (
        <div class="finish-person">
          <p><strong>Viaje:</strong>{ticket.journey_id}</p>
          <p><strong>Día:</strong>{ticket.day}</p>
          <p><strong>DNI:</strong>{ticket.dni}</p>
          <p><strong>Nombre:</strong>{ticket.name}</p>
          <p><strong>Apellido:</strong>{ticket.surname}</p>
          <p><strong>Telefono:</strong>{ticket.phone}</p>
          <p><strong>Email:</strong>{ticket.email}</p>
        </div>
      )
    });
    return [
      ...people,
      <button class="normal-button" onClick={() => this.onPay()}>Reservar</button>
    ]
  }
}

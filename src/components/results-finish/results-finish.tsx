import { Component, Prop } from "@stencil/core";
import { Journey, Person } from "../../pages/results-page/results-page";
import { sendForm, sendJSON } from "../../utils/utils";

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
        await req.show()
      } catch {

      }
      const tickets = this.getTickets();
      await sendJSON('buy.php', tickets);

      // Use Payment Request API
    } else {
      console.error('payment is not available');
      // Fallback to traditional checkout
      //window.location.href = '/checkout/traditional';
    }
  }

  render() {
    const journeys = [this.departure, this.arrival].filter(j => !!j);
    const people = this.people.map((person) => {
      return (
        <div class="finish-person">
          <p><strong>Nombre:</strong> {person.name} {person.surname}</p>
          <p><strong>DNI:</strong> {person.dni}</p>
          <p><strong>Teléfono:</strong> {person.phone}</p>
          <div>
            {journeys.map(journey => {
              return <div>{journey.origin} -> {journey.destination}</div>
            })}
          </div>
        </div>
      )
    });
    return [
      ...people,
      <button class="normal-button" onClick={() => this.onPay()}>Reservar</button>
    ]
  }
}

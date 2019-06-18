export class SimulationInput {

    constructor(trackerId: number, origin: string, destination: string) {
        this.trackerId = trackerId;
        this.origin = origin;
        this.destination = destination;
    }

    trackerId: number;
    origin: string;
    destination: string;
}

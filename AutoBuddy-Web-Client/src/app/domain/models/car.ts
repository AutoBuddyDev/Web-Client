import { Repair } from './repair';
export class Car {
  make?: String;
  model?: String;
  year?: Number;
  vin?: String;
  owner?: String;
  color?: String;
  initialDiagnosis?: String;
  checkedIn?: Date;
  completedRepairs?: Repair[];
  inProgressRepairs?: Repair[];
  repairs?: Number;
}

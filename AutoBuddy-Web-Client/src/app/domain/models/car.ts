import { Repair } from './repair'
export class Car {
  make?: string;
  model?: string;
  year?: number;
  vin?: string;
  owner?: string;
  color?: string;
  initialDiagnosis?: string;
  checkedIn?: Date;
  completedRepairs?: Repair[];
  inProgressRepairs?:Repair[];
}

import { DialogData } from './dialog-data';

export interface Company {
  name: string;
  logo: string;
  position: string;
  location: string;
  year: string;
  description: string;
  dialog: DialogData;
}

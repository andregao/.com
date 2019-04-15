import { DialogDataItem } from './dialog-data';

export interface Personal {
  intro: string;
  subSections: PersonalSection[];
}

export interface PersonalSection {
  title: string;
  thumbnails: {col: string, row: string};
  dialog: {items: DialogDataItem[]};
}

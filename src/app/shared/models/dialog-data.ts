export interface DialogData {
  items: DialogDataItem[];
  initialIndex?: number;
}

export interface DialogDataItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

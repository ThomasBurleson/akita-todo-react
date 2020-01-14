import * as React from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption} from '@ionic/react';

const inlineItem = {
  'width': '30vw',
  '--min-height': '20px',
  '--border-radius': '5px',
  'padding': '15px',
  'marginLeft': '18vw',  
  display: 'inline-block'
} as React.CSSProperties;

export interface FiltersProps {
  onChange: (filter: string) => void;
  selectedFilter: string;
}

export const Filters: React.FC<FiltersProps> = ({onChange,selectedFilter}) => {
  const notifyFilterChange = (e: CustomEvent) =>onChange(e.detail.value);
  return (
    <IonItem style={inlineItem}>
      <IonLabel>Filter by:</IonLabel>
      <IonSelect interface="popover"
                value={selectedFilter}
                onIonChange={notifyFilterChange}>
        <IonSelectOption value="SHOW_ALL">All</IonSelectOption>
        <IonSelectOption value="SHOW_ACTIVE">Active</IonSelectOption>
        <IonSelectOption value="SHOW_COMPLETED">Completed</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
}

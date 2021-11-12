import React from 'react';
import { cloneElement, useEffect, useRef } from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    TextInput, 
    DateField,
    Filter,
    useListContext,
    TopToolbar,
    CreateButton,
    sanitizeListRestProps,
    useRefresh,
} from 'react-admin';


export const SummaryList = props => {
    // const classes = useListStyles();
    const refresh = useRefresh()
    // useRecursiveTimeout(() => refresh(), listRefreshTimeout) 

    const TaskFilter = (props) => (
        <Filter {...props}>
            <TextInput label="First Name" source="firstName" alwaysOn  />
            <TextInput label="MRN" source="mrn" alwaysOn />
            <TextInput label="AIP" source="aip" alwaysOn />
       </Filter>
    );

    return (
        <List 
            {...props} 
            filters={<TaskFilter />} 
            bulkActionButtons={false} 
            sort={{ field: 'lastUpdated', order: 'DESC' }} 
            perPage={25}
        >
            <Datagrid rowClick="show">
                <TextField source="taskId" label="Task ID" />
                <TextField source="taskFocus" label="Focus"/>
                <TextField source="taskBeneficiary.given" label="First Name" />
                <TextField source="taskBeneficiary.surname" label="Last Name" />
                <TextField source="taskEncounter" label="Encounter" />
                <TextField source="taskJourney" label="Journey" />
                <TextField source="taskStatus" label="Status" />
            </Datagrid>
        </List>
    )
}
import React from 'react';
import { cloneElement, useEffect, useRef } from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    TextInput, 
    DateField,
    DateInput,
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
            <DateInput label="Start Date" source="startDate" alwaysOn />
            <DateInput label="End Date" source="endDate" alwaysOn />
            <TextInput label="First Name" source="firstName" alwaysOn  />
            <TextInput label="Last Name" source="lastName" alwaysOn  />
            <TextInput label="Middle Name" source="middleName" alwaysOn  />
            <TextInput label="Display Name" source="displayName" alwaysOn  />
            <DateInput label="Date of Birth" source="dateOfBirth" alwaysOn />
            <TextInput label="MRN" source="mrn" alwaysOn />
            <TextInput label="AIP" source="aip" alwaysOn />
            <TextInput label="Message ID" source="messageId" alwaysOn />
            <TextInput label="Source Event Type" source="sourceEventType" alwaysOn />
            {/* could these be dropdowns? */}
            <TextInput label="Source System" source="sourceSystem" alwaysOn /> 
            <TextInput label="Target System" source="targetSystem" alwaysOn />
            
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
import * as React from "react";
import {
    Show, 
    ArrayField, 
    Datagrid,
    TextField,
    TabbedShowLayout,
    DateField,
    Tab,} from 'react-admin';


export const TaskShow = (props) => { 
    return (
        <Show title='Task view'  {...props}>

            <TabbedShowLayout>
                <Tab label="details">
                
                    <TextField source='id' label='Task ID'/>
                    <TextField source="taskFocus" label="Focus" />
                    
                    <TextField label="Given name" source='taskBeneficiary.given' />
                    <TextField label="Surname" source='taskBeneficiary.surname' />
                    <DateField label='DOB' source="taskBeneficiary.dateOfBirth" />
                    <TextField source="taskBeneficiary.medicalRecordNumber" />
                    <TextField source="taskEncounter" />
                    <TextField source="taskJourney" /> 
                    <TextField source="taskInput" />
                    <TextField source="taskOutput" />
                    <TextField source="taskPeriod.startInstant" />
                    <TextField source="taskPeriod.finishInstant" />
                    <TextField source="taskStatus" />
                    <TextField source="taskStatusReason" />
                    <TextField source="taskTriggerType" />
                    <TextField source="taskTriggerId" />
                    <TextField source="taskFulfillmentLocation" />

                </Tab>
                <Tab label="Sub-tasks">
                    {/* TODO figure out a good way of displaying subtasks */}
                    <ArrayField source="subTasks">
                        <Datagrid>
                            <TextField source="id" />
                            <TextField source="taskJourney" /> 
                            <TextField source="taskInput" />
                            <TextField source="taskOutput" />
                            <TextField source="taskFulfillmentLocation" />
                            <TextField source="taskStatus" />
                            <TextField source="taskStatusReason" />
                        </Datagrid>
                    </ArrayField>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
};
 
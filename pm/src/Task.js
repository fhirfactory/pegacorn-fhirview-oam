import * as React from "react";
import { 
    Show, 
    TabbedShowLayout, 
    Tab, 
    TextField, 
    ArrayField, 
    SingleFieldList, 
    DateField } from 'react-admin';

export const TaskShow = (props) => { 
    return (
        <Show title="Show Task" mutationMode="pessimistic" {...props}>
            <TabbedShowLayout>
                <Tab label="details">
                    <TextField source="taskId" />
                    <TextField source="taskFocus" />
                    <ArrayField source="taskBeneficiary">
                        <SingleFieldList>
                            <TextField source="given" />
                            <TextField source="surname" />
                            <TextField source="otherGiven" />
                            <DateField source="dateOfBirth" />
                            <TextField source="medicalRecordNumber" />
                        </SingleFieldList>
                    </ArrayField>
                    <TextField source="taskEncounter" />
                    {/* Needs to change to reflect array */}
                    <TextField source="taskJourney" /> 
                    <TextField source="taskInput" />
                    <TextField source="taskOutput" />
                    <DateField source="taskPeriod.startInstant" />
                    <DateField source="taskPeriod.finishInstant" />
                    <TextField source="taskStatus" />
                    <TextField source="taskStatusReason" />
                    <TextField source="taskTriggerType" />
                    <TextField source="taskTriggerId" />
                    <TextField source="taskFulfillmentLocation" />
                </Tab>
                <Tab label="Subtasks">
                    <ArrayField source="subTasks">
                        <SingleFieldList>
                            <TextField source="taskId" />
                            <TextField source="taskFocus" />
                            <ArrayField source="taskBeneficiary">
                                <SingleFieldList>
                                    <TextField source="given" />
                                    <TextField source="surname" />
                                    <TextField source="otherGiven" />
                                    <DateField source="dateOfBirth" />
                                    <TextField source="medicalRecordNumber" />
                                </SingleFieldList>
                            </ArrayField>
                            <TextField source="taskEncounter" />
                            <TextField source="taskJourney" /> 
                            <TextField source="taskInput" />
                            <TextField source="taskOutput" />
                            <DateField source="taskPeriod.startInstant" />
                            <DateField source="taskPeriod.finishInstant" />
                            <TextField source="taskStatus" />
                            <TextField source="taskStatusReason" />
                            <TextField source="taskTriggerType" />
                            <TextField source="taskTriggerId" />
                            <TextField source="taskFulfillmentLocation" />
                        </SingleFieldList>
                    </ArrayField>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
};
 
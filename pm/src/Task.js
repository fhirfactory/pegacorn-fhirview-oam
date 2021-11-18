import * as React from "react";
import {
    Show, 
    ArrayField, 
    Datagrid,
    TextField,
    SimpleShowLayout,} from 'react-admin';


export const TaskShow = (props) => { 
    return (
        <Show title="Show Task" 
            {...props}>
            <SimpleShowLayout>

            {/* <TabbedShowLayout> */}
                {/* <Tab label="details"> */}
                <ArrayField source="taskList">
                    <Datagrid>
                    <TextField source='taskId' label='Task ID:'/>
                    <TextField source="taskFocus" label="Focus:" />
                    {/* <SingleFieldList source="taskBeneficiary">
                            <TextField source="given" />
                            <TextField source="surname" />
                            <TextField source="otherGiven" />
                            <DateField source="dateOfBirth" />
                            <TextField source="medicalRecordNumber" />
                    </SingleFieldList> */}
                    {/* <TextField source="taskEncounter" /> */}
                    {/* Needs to change to reflect array */}
                    {/* <TextField source="taskJourney" />  */}
                    {/* <TextField source="taskList.taskInput" /> */}
                    {/* <TextField source="taskList.taskOutput" /> */}
                    {/* <DateField source="taskPeriod.startInstant" />
                    <DateField source="taskPeriod.finishInstant" /> */}
                    {/* <TextField source="taskStatus" /> */}
                    {/* <TextField source="taskStatusReason" />
                    <TextField source="taskTriggerType" />
                    <TextField source="taskTriggerId" />
                    <TextField source="taskFulfillmentLocation" /> */}
                    </Datagrid>
                </ArrayField>
                </SimpleShowLayout>
                {/* </Tab> */}
                {/* <Tab label="Subtasks">
                    <ArrayField source="subTasks">
                        <SingleFieldList>
                            <TextField source="taskId" />
                            <TextField source="taskFocus" />
                            <SingleFieldList>
                                <TextField source="given" />
                                <TextField source="surname" />
                                <TextField source="otherGiven" />
                                <DateField source="dateOfBirth" />
                                <TextField source="medicalRecordNumber" />
                            </SingleFieldList>
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
                </Tab> */}
            {/* </TabbedShowLayout> */}
        </Show>
    )
};
 
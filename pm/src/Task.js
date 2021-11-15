import * as React from "react";
import { Show } from 'react-admin';

export const TaskShow = (props) => { 
    return (
        <Show title="Show Task" mutationMode="pessimistic" {...props}>
            <SimpleShowLayout>
                <TextField source="taskId" />
                <TextField source="taskFocus" />
                <ArrayField source="taskBeneficiary">
                    <Datagrid>
                        <TextField source="given" />
                        <TextField source="surname" />
                        <TextField source="otherGiven" />
                        <DateField source="dateOfBirth" />
                        <TextField source="medicalRecordNumber" />
                    </Datagrid>
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
                {/* TODO Subtasks */}
            </SimpleShowLayout>
        </Show>
    )
};
 
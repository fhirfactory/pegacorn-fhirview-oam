import * as React from "react";
import { Show } from 'react-admin';

export const TaskShow = (props) => { 


    return (
        <Show title="Show Task" mutationMode="pessimistic" {...props}>
        </Show>
    )
};
 
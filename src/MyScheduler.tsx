import React, { Fragment, useRef, useState } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS, RESOURCES } from './events';
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { SchedulerRef } from "@aldabil/react-scheduler/types";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";


const StyledContainer = styled.div`
position: absolute;
padding: 10px;
top: 0;
right: 0;
bottom: 0;
left: 0;
`;

const MyScheduler: React.FC = () => {
  const [mode, setMode] = useState<"default" | "tabs">("default");
  const calendarRef = useRef<SchedulerRef>(null);

  return (
    <Fragment>
      <StyledContainer>
      <div style={{ textAlign: "center" }}>
        <span>Resource View Mode: </span>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => {
            setMode("default");
            calendarRef.current?.scheduler?.handleState(
              "default",
              "resourceViewMode"
            );
          }}
        >
          Default
        </Button>
        <Button
          color={mode === "tabs" ? "primary" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => {
            setMode("tabs");
            calendarRef.current?.scheduler?.handleState(
              "tabs",
              "resourceViewMode"
            );
          }}
        >
          Tabs
        </Button>
      </div>
      <Scheduler
        ref={calendarRef}
        view="day"
        day={{
          startHour: 0,
          endHour: 24,
          step: 20
        }}
        week={null}
        month={null}
        events={EVENTS}
        resources={RESOURCES}
        resourceFields={{
          idField: "room_id",
          textField: "title",
          subTextField: 'des',
          colorField: "color"
        }}
        fields={[
          {
            name: "room_id",
            type: "select",
            default: RESOURCES[0].room_id,
            options: RESOURCES.map((res) => {
              return {
                id: res.room_id,
                text: `${res.title} (${res.des})`,
                value: res.room_id //Should match "name" property
              };
            }),
            config: { label: "Assignee", required: true }
          }
        ]}
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              {fields.map((field, i) => {
                if (field.name === "room_id") {
                  const admin = field?.options?.find(
                    (fe) => fe.id === event.room_id
                  );
                  return (
                    <Typography
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                      color="textSecondary"
                      variant="caption"
                      noWrap
                    >
                      <PersonRoundedIcon /> {admin?.text}
                    </Typography>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          );
        }}
      />
    </StyledContainer>
    </Fragment>
  );
   
};


export default MyScheduler;

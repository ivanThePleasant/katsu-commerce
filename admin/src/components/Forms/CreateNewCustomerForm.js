import React, { useState } from "react";
import { Box } from "@strapi/design-system/Box";
import { Stack } from "@strapi/design-system/Stack";
import {
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
} from "@strapi/design-system/Field";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import { ToggleInput } from "@strapi/design-system/ToggleInput";

function CreateNewCustomerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <form>
      <Box padding={4}>
        <Stack size={4} padding={3}>
          <Grid gap={5}>
            <GridItem col={6}>
              <Field name="first-name">
                <FieldLabel required>First Name</FieldLabel>
                <FieldInput type="text" placeholder="John" value="" onChange={() => {}} />
              </Field>
            </GridItem>
            <GridItem col={6}>
              <Field name="last-name">
                <FieldLabel required>Last Name</FieldLabel>
                <FieldInput type="text" placeholder="Doe" value="" onChange={() => {}} />
              </Field>
            </GridItem>
          </Grid>
          <Grid gap={5}>
            <GridItem col={6}>
              <Field name="email">
                <FieldLabel required>Email</FieldLabel>
                <FieldInput
                  type="text"
                  placeholder="john.doe@example.io"
                  value=""
                  onChange={() => {}}
                />
              </Field>
            </GridItem>
            <GridItem col={6}>
              <Field name="password">
                <FieldLabel required>Password</FieldLabel>
                <FieldInput type="password" placeholder="Doe" value="" onChange={() => {}} />
              </Field>
            </GridItem>
          </Grid>
          <Grid gap={5}>
            <GridItem col={6}>
              <ToggleInput
                label="Confirmed"
                onLabel="On"
                offLabel="Off"
                checked={confirmed}
                onChange={() => setConfirmed(!confirmed)}
              />
            </GridItem>
            <GridItem col={6}>
              <ToggleInput
                label="Blocked"
                onLabel="On"
                offLabel="Off"
                checked={blocked}
                onChange={() => setBlocked(!blocked)}
              />
            </GridItem>
          </Grid>
        </Stack>
        {/* <br />
        <Stack size={4} padding={3}>
          <Grid gap={5}>
            <GridItem col={6}>
              <Field name="first-line-address">
                <FieldLabel required>F</FieldLabel>
                <FieldInput
                  type="text"
                  placeholder="123 Some Street"
                  value={""}
                  onChange={() => {}}
                />
              </Field>
            </GridItem>
            <GridItem col={6}>
              <Field name="second-line-address">
                <FieldLabel>Last Name</FieldLabel>
                <FieldInput
                  type="text"
                  placeholder="Doe"
                  value={""}
                  onChange={() => {}}
                />
              </Field>
            </GridItem>
          </Grid>
          <Grid gap={5}>
            <GridItem col={6}>
              <Field name="email">
                <FieldLabel required>Email</FieldLabel>
                <FieldInput
                  type="text"
                  placeholder="john.doe@example.io"
                  value={""}
                  onChange={() => {}}
                />
              </Field>
            </GridItem>
            <GridItem col={6}>
              <Field name="password">
                <FieldLabel required>Password</FieldLabel>
                <FieldInput
                  type="password"
                  placeholder="Doe"
                  value={""}
                  onChange={() => {}}
                />
              </Field>
            </GridItem>
          </Grid>
          <Grid gap={5}>
            <GridItem col={6}>
              <ToggleInput
                label="Confirmed"
                onLabel={"On"}
                offLabel={"Off"}
                checked={confirmed}
                onChange={() => setConfirmed(!confirmed)}
                />
            </GridItem>
            <GridItem col={6}>
              <ToggleInput
                label="Blocked"
                onLabel={"On"}
                offLabel={"Off"}
                checked={blocked}
                onChange={() => setBlocked(!blocked)}
              />
            </GridItem>
          </Grid>
        </Stack> */}
      </Box>
    </form>
  );
}

export default CreateNewCustomerForm;

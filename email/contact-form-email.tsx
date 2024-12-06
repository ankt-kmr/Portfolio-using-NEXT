import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type contactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: contactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Portfolio Site.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-md ">
              <Heading className="leading-tight">Here is the message from Contact form.</Heading>
              <Text>{message} </Text>
              <Hr />
              <Text>The Sender's email is: {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

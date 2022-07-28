---
title: Polls
description: Documentation regarding the polls system
sidebar_position: 3
---

import Button from '../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordMention,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import {
  DiscordButton,
  DiscordButtons,
} from "discord-message-components/packages/react";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <code>/poll start &lt;topic&gt; [description] [duration] [@ping_role] [#channel]</code> | Start a poll with an optional duration       |   False        |
| <code>/poll end &lt;poll_id&gt;</code>   | End a poll via poll ID        |     False        |

<br/>

## Example

```txt
/poll start topic:Poll topic description: This is a poll description. duration: 7d
```

<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="Poll topic"
        borderColor="#5865f2"
        timestamp="12/24/2022"
        authorIcon="/img/logo.png"
        footerIcon="/img/logo.png"
        authorName="Poll by User#0000"
        >
        This is a poll description.            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Votes">
                <strong>Upvotes:</strong> 3 <code>(100%)</code>
                <br/>
                <strong>Downvotes:</strong> 0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Ends">
                <code>in 7 days</code>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">Vote using the buttons below • Poll ID: 12345678</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          poll start
        </DiscordInteraction>
      </div>
      <div>
        <DiscordButtons>
          <DiscordButton type="success" emoji="✅"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">|</DiscordButton>
          <DiscordButton type="danger" emoji="❌"></DiscordButton>
        </DiscordButtons>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="danger" emoji="🚪">Leave Poll</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

<br/>

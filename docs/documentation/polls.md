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
| <code>/giveaway start [...]</code> | Start a giveaway       |   False        |
| <code>/giveaway end <giveaway_id></code>   | End a giveaway via giveaway ID        |     False        |
| <code>/giveaway reroll <giveaway_id> &lt;winners&gt; </code>   | Reroll a giveaway        |     <premium>True</premium>        |
| <code>/giveaway view <giveaway_id></code>   | View a giveaway        |     False        |

<br/>

## Example

```txt
/poll
```

<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="Poll name"
        borderColor="#2ecc71"
        timestamp="12/24/2022"
        footerIcon="/img/logo.png"
        image="/img/banner-v3.png"
        >
        This is a poll description.            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Ends">
                <code>in 6 hours</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Host">
                  <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">1 winner</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          giveaway
        </DiscordInteraction>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="primary" emoji="🎉"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">3 entries</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

<br/>
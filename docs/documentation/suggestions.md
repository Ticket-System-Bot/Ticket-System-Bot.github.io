---
title: Suggestions
description: Documentation regarding the suggestion system
sidebar_position: 2
---

:::info

This is a new system we have added, if you see any bugs, please report them to our [support server](/support.html)!

:::

import Button from '../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";

Below is an example of a suggestion

<br/>
<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="User#0000"
        thumbnail="/img/logo.png"
        borderColor="#5865F2"
        timestamp="12/24/2022"
        footerIcon="/img/logo.png"
        image="/img/banner-v3.png"
        >
        This is a suggestion! Fields below show information about this suggestion. In the <code>Votes</code> field, it shows the amount of votes and the percentage of of upvotes compared to downvotes and vice-versa.            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Votes">
                  <strong>Upvotes:</strong> 3 <code>(100%)</code>
                  <br/>
                  <strong>Downvotes:</strong> 0 <code>(0%)</code>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Status">
                  📣 This suggestion is waiting for an official answer!
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">Suggestion ID: wasdabc12340</span>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

<br/>

| Usage      | Description | Premium |
| ----------- | ----------- | ----------- | 
| <code>/config suggestions_channel &lt;#channel&gt; </code>      | Set the servers suggestion channel       |   False        |
| <code>/suggest &lt;suggestion&gt;</code>   | Suggest something        |     False        |
| <code>/suggestions view &lt;id&gt; [hidden=False]</code>   | View a suggestion in-depth        |     False        |
| <code>/suggestions approve &lt;id&gt; [comment] [close_voting=False] [hidden=False]</code>   | Approve a suggestion        |     False        |
| <code>/suggestions deny &lt;id&gt; [comment] [close_voting=False] [hidden=False]</code>   | Deny a suggestion        |     False        |
| <code>/suggestions implement &lt;id&gt; [comment] [close_voting=False] [hidden=False]</code>   | Implement a suggestion        |     False        |
| <code>/suggestions consider &lt;id&gt; [comment] [hidden=False]</code>   | Consider a suggestion        |     False        |
| <code>/suggestions comment &lt;id&gt; &lt;comment&gt;</code>   | Comment on a suggestion        |     <premium>True</premium>        |

<br />

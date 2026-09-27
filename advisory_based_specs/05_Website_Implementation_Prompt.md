# Implement the PainToBuild founder advisory website

## Task

Implement the website changes described below in the local source code. Build and test the result, then stop for my review. Do not deploy, push changes to a remote repository, or change external accounts.

Change PainToBuild from a website led by problem research into a founder advisory business. Problem research should remain one part of the service. Help should cover the founder journey, from choosing a problem and deciding what to build to finding customers and improving an existing product.

Use the approved plain language copy. This is implementation work, not another strategy exercise. Carry out all work that can be completed without missing business facts. Ask me only for facts or decisions that you cannot establish from the supplied material.

## Source and reference files

Website source:

`/Users/suvojitdutta/Documents/Rest/apps/apps/paintobuild-website/paintobuild-site`

Reference directory:

`/Users/suvojitdutta/Documents/Rest/cowork/Ideas/PainToBuild_Advisory_Audit`

Read these files in full before editing:

1. `02_Replacement_Copy.md`: the current approved writing draft. This is the authority for visitor wording, page titles, descriptions, menu labels and buttons.
2. `01_Strategy_and_Page_Audit.md`: the business direction and findings for each page.
3. `03_Link_Register.md`: the source link inventory and destination changes.
4. `04_Implementation_and_Acceptance.md`: technical work and acceptance checks.

The filenames above are relative to the reference directory. Also consult `source_link_occurrences.json` and `source_manifest.json` when useful for comparing the audit with the current source. These are old snapshots, not instructions to restore files or discard newer changes.

Do not use `02_Replacement_Copy_Before_Plain_Language_Edit.md` as implementation copy. It is an archive of the superseded draft.

Read applicable `AGENTS.md` instructions and the repository README. Check the current source and Git status before editing. Preserve unrelated changes and do not reset the working tree. Do not expose secrets from environment files or command output.

### Resolving differences between the documents

This prompt authorizes local implementation, which replaces earlier statements that the task is analysis only. It does not authorize deployment or external edits.

The revised `02_Replacement_Copy.md` takes precedence over the older audit and link register for wording and visible labels. The link destinations and strategic direction in the other files still apply unless the revised copy explicitly changes them.

An older instruction to resolve all business details first does not prevent independent local work. Complete that work, record the remaining questions, and ask me before finalizing statements that depend on the answers.

If current source differs from an audit finding, inspect it and act on current evidence. Do not reintroduce a defect because the snapshot is older.

## Business decisions already made

Do not ask me to choose these again:

- Advisory is the main business.
- Cover three areas: finding a problem to work on, deciding what to build, and deciding what to try next.
- Use one starting service, the Founder Decision Review.
- Advisory pricing is undecided. Do not invent a price or reuse the former $99 or $349 as the new advertised fee.
- Retain the Builder Validation Brief and Challenge Mining Kit as secondary products for people doing their own research.
- Keep the free template as a secondary resource.
- Remove Everyday Default Audits from the main founder journey. Keep its existing address as a quiet legacy page.
- Use “I” for the operator and “you” for the visitor.
- Keep the existing PainToBuild brand name, useful design elements and working integrations unless a specified change requires otherwise.

The review draft includes a written review, one round of questions and one later review of test results. You may implement this proposed structure locally. Do not claim that delivery timing, input limits, follow-up arrangements or payment terms have been confirmed when they have not.

## Mandatory writing rules

These rules are not optional:

- Use plain, simple language a person outside the startup industry can understand.
- Use short, natural sentences. Keep one main thought in each sentence where possible.
- Do not add clever phrases, slogans, inflated claims or consulting language.
- Do not use em dashes. Avoid en dashes in prose too; write “to” for ranges.
- Prefer spaces or a rewritten phrase over hyphens in compound words.
- Preserve hyphens that are required in URLs, identifiers, code and exact existing product names.
- Replace jargon such as acquisition, activation, traction, MVP, deliverables and bounded experiments with plain descriptions.
- Do not introduce “we,” “our” or “us” as though the business is a team.
- Do not promise sales, growth, demand, funding or commercial success.
- Do not invent experience, testimonials, clients, source verification or business results.
- Keep the fictional example clearly labeled as made up. Do not turn it into a case study.
- Apply these rules to headings, buttons, menus, forms, errors, metadata, social previews and accessibility labels, not just paragraphs.

Preserve the meaning and limits of the supplied copy. Do not “improve” it by making it sound more polished or more confident. Make small wording adjustments only for genuine usability needs and explain material changes in the handoff.

Mechanical checks help find missed punctuation and jargon. They do not establish that writing sounds natural. Read every rendered page as well.

## Authorization boundaries

You may edit local website files, add pages, configure local redirects, make necessary source fixes, install existing project dependencies if needed, and run local build and validation tools.

You may read the public website, public product listings and official technical documentation. Prefer current official documentation for uncertain hosting, framework or routing behavior.

Do not:

- Run the deploy script or any command that publishes the site.
- Push commits, create remote branches or publish a pull request.
- Edit Gumroad listings, prices, profiles or settings.
- Buy products or submit a checkout.
- Send email, subscribe an address, submit a real inquiry or trigger the production template automation.
- Change MailerLite, Cloudflare or other external settings.
- Add tracking services, change client data handling or make commitments on my behalf.
- Change credentials, expose keys or upload client information.
- Create separate chats or delegate work unless I separately request it.

Use local mocks for form tests. If a live integration test is necessary, explain exactly what it would send or change and ask first.

## Implementation sequence

### 1 Inspect and establish the starting point

Inventory pages, generated routes, shared layouts, content files, metadata, forms, redirects and configuration. Confirm the actual framework and package scripts rather than assuming the audit is current.

Record the starting Git status. Use a suitable existing checkout without overwriting unrelated work. If isolation is needed, use the environment's supported worktree workflow. Report the exact directory in which you work.

Do not perform broad dependency upgrades or unrelated refactoring. The goal is a complete content and journey change with the necessary technical corrections.

### 2 Implement the complete page set

Use the copy document for the full text. Do not paste “Owner note,” “Title,” “Description,” route instructions, bracketed business questions or link arrows into visible website content. Turn the intended labels into real links, titles into metadata, and anchor instructions into actual HTML IDs.

| Address | Required work |
|---|---|
| `/` | Replace the research-led homepage with the three areas of help, starting review, process, example, selected research and secondary resources |
| `/advisory/` | Create the full service page with what is included, what is separate, required information and inquiry route |
| `/analysis/` | Replace the obsolete offer with a permanent redirect to `/advisory/` |
| `/methodology/` | Put the advisory process first; retain the relevant research rules and existing fragment addresses |
| `/evidence/` | Present the existing articles as supporting research, with relevant links to advisory |
| `/evidence/reddit-product-validation/` | Rewrite around the reader's own idea; remove the unrelated instruction to sell research dossiers |
| `/evidence/community-access-is-not-buyer-access/` | Rewrite around possible customers, buying decisions and a small test; remove unsupported causal certainty |
| `/diagnostics/signups-no-core-feature-use/` | Rewrite around what people actually do; separate visitors, registrations, useful actions, repeat use and payment |
| `/about/` | Describe personal advisory and research honestly; do not invent a biography |
| `/resources/` | Add a comparison of the free template, Brief and Kit, with personal help as a separate option |
| `/brief/` | Keep the product, clarify edition and inclusions, and remove the implication that future volumes are included |
| `/challenge-mining-kit/` | Add a first-party page for the existing Kit, including overlap with the Brief |
| `/tools/evidence-ledger-template/` | Use simple copy and the clearly made up example; preserve the existing subscription purpose |
| `/thank-you/` | Keep the confirmation instructions accurate and separate from advisory inquiries |
| `/contact/` | Make the existing email address the main inquiry route with a short list of helpful details |
| `/everyday/` | Keep a quiet legacy page, outside main navigation and search results |
| `/404.html` | Provide useful recovery links and preserve real not-found behavior |
| `/example-review/` | Add the fictional review with a visible label and no claimed results |
| `/privacy/` | Prepare the revised structure; finalize only when actual operating facts are known |
| `/terms/` | Prepare the revised structure; finalize only when actual service and business terms are known |

The copy file has 19 page drafts. The old `/analysis/` address is an additional redirect requirement, not a twentieth content page.

Build the three service anchors and review anchor exactly as specified:

- `/advisory/#find-a-problem`
- `/advisory/#decide-what-to-build`
- `/advisory/#decide-what-to-try-next`
- `/advisory/#founder-decision-review`

Preserve these existing methodology anchors:

`evidence-categories`, `independence`, `strength-levels`, `confidence-tiers`, `contradictions`, `external-validation`, `exclusions`, `problem-vs-payment`, `limitations`, `privacy`, `decision-criteria`.

### 3 Update every shared entry point

Use the revised labels:

Main menu: Work with me, How it works, Research, Guides and tools, About.

Main button: Tell me what you need help with.

Apply the change to desktop and mobile navigation, footer, article endings, home cards, related links and error recovery. The main button leads to `/contact/`, not the shop or a template subscription.

Keep research useful in its own right. Do not replace source citations with sales links. Put product purchase links on their resource pages and use the shop as a secondary route.

The main button is longer than the old label. Make the layout accommodate it without overflow or tiny text. Preserve clear keyboard focus, readable type and the existing brand style.

### 4 Handle products and outside links without editing accounts

The earlier review observed:

- Builder Validation Brief at $19: `https://paintobuild.gumroad.com/l/the-builder-validation-brief`
- Challenge Mining Kit at $39: `https://paintobuild.gumroad.com/l/the-challenge-mining-kit`
- Store: `https://paintobuild.gumroad.com/`
- Old advisory destination: `https://paintobuild.gumroad.com/l/focused-analysis`, which returned 404 during that review.

Recheck those public destinations. A previous observation is not a guarantee of current status.

Confirm product identity, visible price, edition and stated contents. Do not claim that downloadable files were inspected unless you actually had authorized access to them. If a listing differs from the approved draft, report the conflict rather than inventing an explanation or modifying a price silently.

Remove the old advisory checkout link and price from active site copy and metadata. Replacing that route with an inquiry fixes the website journey; it does not repair the external Gumroad listing. Describe that distinction accurately.

Report proposed Gumroad description/profile changes in the handoff. Do not make them.

### 5 Correct source issues that affect the new site

Verify each item against current code before changing it:

- Generate every social image referenced by metadata. The audit found only index, about and brief declared in the generator.
- Update title, description, canonical, social text and structured data together. Remove obsolete advisory prices, stock claims and checkout URLs from all of them.
- Make the article layout honor its `noindex` setting. Do not confuse this with hiding every research article.
- Update sitemap inclusion for completed new pages. Exclude redirects, the thank-you page, legacy Everyday page and unfinished pages.
- Remove the stale `/thanks/` robots rule. Allow the crawler to read the noindex on the actual thank-you route.
- Stop calling build time a content review date. Use an actual recorded review or modification date, or omit the date.
- Format date-only source verification dates without a timezone shift. Do not alter historical dates to disguise a rendering bug.
- Do not display numerical confidence counts unless they can be reconciled with supporting records. Preserve old records in version history or internal files.
- Support plain research guidance without forcing every article to carry a validation score.
- Keep quoted reports, payment claims, actual observed results and your own interpretation distinct.
- Remove automatic first-sentence card extraction where it produces an unhelpful teaser such as “No.”
- Make article and diagnostic route generation consistent. Do not send diagnostic links to an evidence-only route prefix.
- Reconcile related-link fields and hardcoded maps so they do not disagree.
- Correct misleading event names. Clicking an email link is not a submitted inquiry; submitting a form is not a confirmed subscriber or delivered template.
- Do not claim analytics work because attributes exist. Do not add a new analytics integration in this task. Report externally configured analytics as unverified if you cannot inspect them.
- Preserve the MailerLite endpoint for resource requests. Do not reuse it for private advisory messages.
- Update the README to match the new business and actual technical behavior. Schema checks can validate structure; they cannot prove factual truth or commercial demand.

For the redirect, consult current documentation for the actual hosting setup. A meta refresh is not proof of a permanent HTTP redirect. Test using the hosting-compatible local runtime when available. If only source/configuration can be verified, state that limit and leave deployed behavior unverified.

### 6 Handle missing facts without inventing them

Complete the independent pages, source changes, redirects and local checks before asking about unresolved business details. Keep a concise list as you work.

Facts that may remain missing include:

- Written work only or calls as well.
- Limits on material reviewed, product testing and new research.
- Delivery time and available capacity.
- Deadline for sending test results, and what happens if no test is run.
- Quote and payment process, when work starts, cancellations and refunds.
- Storage, access, retention and deletion of client material.
- Use of AI tools or other services with client information.
- Actual operator disclosures and permission to publish client examples.
- Verified product files and the actual subscription and analytics setup.

Do not reopen the decisions already made or demand optional credentials just to fill a page.

Do not put unresolved bracketed placeholders or owner instructions into a normal public page. Keep unresolved policy drafts outside the public route tree. Until answers arrive, retain the existing policy route content as explicitly unfinished work in the handoff, not as a claim that it is suitable for the new business. Explain any outdated statements in the blocker list.

The local service preview may show the proposed structure, but list any unconfirmed promises in the handoff. Nothing is publication-ready until those points are resolved.

When answers are needed, ask in a normal chat response. Give clear options and your recommendation where useful. After asking, end the turn and wait. Do not continue background work while waiting. On reply, finish the dependent work and rerun the relevant checks.

## Testing and evidence

Run the appropriate existing project build. Do not use the deploy script as a build shortcut. If tests or check scripts exist, run those relevant to the changes. Add only checks that catch meaningful content, route or integration failures.

### Content coverage

Create a coverage record showing every existing route, each new page and the old advisory redirect. For each, list the source file, new purpose and verification result.

Check that the entire revised copy has been used appropriately, including buttons, helper text, errors, descriptions and policy dependencies. No owner notes or routing instructions should appear as website text.

Search the rendered output for old prices, old positioning, false availability, unsupported outcome claims, em dashes, unnecessary compound hyphens and team voice. Exclude URLs, code, exact source quotations and legitimate product names when appropriate. An exclusion is not permission to add new marketing jargon.

Read all the pages for natural language. Do not call the wording human merely because a text scan passed.

### Links and metadata

Check every distinct internal destination and fragment from the built pages, including shared menus and footer. Record removals and retargets against the supplied link register. Check actual destinations, not only whether a URL-shaped string exists.

Verify all referenced images and social images. Check canonical URLs, page titles, descriptions, structured data, noindex settings and sitemap entries.

Verify the old `/analysis/` route redirects correctly in the appropriate local environment without loops. Verify an unknown path produces the intended 404 response where the runtime supports it.

Check public product destinations and retained research links. Record inaccessible sources accurately; do not infer that a blocked fetch means the source is fabricated. Do not treat an HTTP 200 as proof of the associated claim.

### Forms and responsive use

Use mocks to check the template form's invalid input, server failure and accepted response paths without contacting the production service. Confirm errors are readable and accessible. Keep the confirmation page separate from proof of email delivery.

Test the site at approximately 360, 768, 1024 and 1440 pixels wide. Review every distinct page and shared layout, and inspect pages with long titles, tables or buttons at narrow widths. Check keyboard navigation, focus visibility, mobile menu, headings, table overflow and email fallback links.

Capture local screenshots of the home page, service page, resources, one article and mobile navigation for review. Do not imply that these are deployed pages.

If dependencies or tools prevent a check, state exactly what could not be verified. Continue useful work that is not blocked. Do not replace a missing runtime check with an unsupported success claim.

## Deliverables

Leave the implemented source locally in a reviewable state. Do not deploy or push it.

Save an implementation handoff under the reference directory, using a new filename so existing audit and copy files remain intact. Include:

1. Exact checkout path and files changed.
2. Route and page coverage, including the old service redirect.
3. Any intentional wording differences from the approved copy.
4. Build, content, link, metadata and responsive checks actually run, with results.
5. Screenshot paths and instructions for opening the local preview.
6. Missing business answers, any pages still unfinished and what cannot be published yet.
7. Proposed Gumroad changes, clearly marked as not performed.
8. Live integration and hosting behavior not verified locally.

In the final response, state what was completed, what remains blocked and how I can review it. Clearly state that the work is local and has not been deployed.

Do not describe the task as fully complete if required business answers still prevent finishing pages. Do not ask for deployment approval as part of this task. Deployment is separate work after I review the local result.

## Completion criteria

The local implementation is complete when the new advisory journey is coherent, all supplied page copy is implemented or an explicit dependency is resolved, links and metadata are consistent, and the relevant checks pass. The source must preserve unrelated work and contain no fabricated business facts.

If answers are still missing, finish all independent work, provide the concrete local result and ask the focused questions needed to complete the remaining pages. Stop there and wait for my reply.

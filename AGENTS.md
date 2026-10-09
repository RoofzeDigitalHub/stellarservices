<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared website navigation, footer and floating contacts in the root layout; leaf routes own content and metadata so every page is directly shareable.
- Centralize business contacts, service categories and WhatsApp message URLs in the browser-safe business module to avoid inconsistent details.
- Enquiry forms prepare user-reviewed WhatsApp messages rather than storing submissions; do not report a submission as delivered before the user sends it.
- Use global semantic design tokens and Button variants for visual styling so brand values can change consistently.

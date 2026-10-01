/** Join CSS class strings; skips `false`, `null`, and `undefined` (handy for conditional classes). */
export function classNames(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}

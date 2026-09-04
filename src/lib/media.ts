// Pinned commit of the public archive (ScaredWhyte/-Whyte-Presents-Eternus-Edge)
// so audio URLs never rot when the archive repo changes.
const ARCHIVE_OWNER = "ScaredWhyte"
const ARCHIVE_REPO = "-Whyte-Presents-Eternus-Edge"
const ARCHIVE_SHA = "6b404edd7f5f1cf8d80f1feed569a588463d8e8d"

const WAVE_1_AUDIO_PATH = "05_PUBLIC/WAVES/Wave_1_EchoForm/Wave 1 Audio"

function encodePath(path: string): string {
  return path.split("/").map(encodeURIComponent).join("/")
}

/** jsDelivr-served asset from the archive repo, pinned to a fixed commit. */
export function jsDelivr(path: string): string {
  return `https://cdn.jsdelivr.net/gh/${ARCHIVE_OWNER}/${ARCHIVE_REPO}@${ARCHIVE_SHA}/${encodePath(path)}`
}

/** raw.githubusercontent.com asset, used for files over jsDelivr's 20MB cap. */
export function githubRaw(path: string): string {
  return `https://raw.githubusercontent.com/${ARCHIVE_OWNER}/${ARCHIVE_REPO}/${ARCHIVE_SHA}/${encodePath(path)}`
}

export function wave1Audio(filename: string, opts?: { raw?: boolean }): string {
  const path = `${WAVE_1_AUDIO_PATH}/${filename}`
  return opts?.raw ? githubRaw(path) : jsDelivr(path)
}

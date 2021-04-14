export default function directoryString(directory: string[]): string {
	return `/${directory.join('/')}/`
}

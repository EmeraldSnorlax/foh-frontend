export default function getDirectoryString(directory: string[]): string {
	return `/${directory.join('/')}/`
}

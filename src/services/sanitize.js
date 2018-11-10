import TurndownService from 'turndown'
import marked from 'marked'

const turndownService = new TurndownService();

export default function sanitize(html) {
    return html !== null ? marked(turndownService.turndown(html)) : '';
}

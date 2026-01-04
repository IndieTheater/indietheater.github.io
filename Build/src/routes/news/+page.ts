// src/routes/news/+page.ts
interface PostMetadata {
    title: string;
    date: string;
    author?: string;
    tags?: string[];
    thumbnail?: string;
    excerpt?: string;
}

interface PostModule {
    metadata: PostMetadata;
    default: any;
}

export async function load() {
    const modules = import.meta.glob<PostModule>('../../content/posts/*.md');

    const posts = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
            const module = await resolver();
            const slugMatch = path.match(/\/([\w-]+)\.md$/);
            const slug = slugMatch ? slugMatch[1] : '';
            return {
                slug,
                ...module.metadata
            };
        })
    );

    // Sort by date, newest first
    posts.sort((a, b) => {
        const dateA = new Date(a.date || '2000-01-01');
        const dateB = new Date(b.date || '2000-01-01');
        return dateB.getTime() - dateA.getTime();
    });

    return { posts };
}
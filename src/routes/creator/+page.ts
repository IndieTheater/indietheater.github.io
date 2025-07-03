interface CreatorMetadata {
  name: string;
  founded: string;
  location: string;
  knownFor: string[];
  thumbnail: string;
}

export async function load() {
  const modules = import.meta.glob('../../content/creators/*.md');

  const creators = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const module = await resolver() as { metadata: CreatorMetadata };
      const slugMatch = path.match(/\/([\w-]+)\.md$/);
      const slug = slugMatch ? slugMatch[1] : '';
      return {
        slug,
        ...module.metadata
      };
    })
  );

  return { creators };
}

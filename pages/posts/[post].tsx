import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import Container from "../../components/container";

type PostType = {
    slug: string;
    title: string;
    date: string;
    author: string;
    authorImage: string;
    content: string;
};

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

type BodyProps = {
    content: string;
};

export default function Post({ post, morePosts, preview }: Props) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return router.isFallback ? (
        <>loading</>
    ) : (
        <>
            <Container top="flex-0">
                <Head>
                    <title>{post.title || "Title Not Provided"}</title>
                </Head>
                <div className="flex flex-row items-center">
                    <img
                        src={post.authorImage}
                        alt="image"
                        className="rounded-[50%] max-h-[30px] mr-2"
                    />
                    <p className="default-text italic">
                        {post.author || "Author Not Found"} /{"  "}
                        {post.date || "Date Not Found"}
                    </p>
                </div>
                <div className="prose max-w-full mx-auto mb-4">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </Container>
        </>
    );
}

type Params = {
    params: {
        post: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.post, [
        "title",
        "date",
        "slug",
        "author",
        "authorImage",
        "content",
    ]);
    const content = await markdownToHtml(post.content || "");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    post: post.slug,
                },
            };
        }),
        fallback: false,
    };
}

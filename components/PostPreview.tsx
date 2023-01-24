import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
	return (
	  <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
      <h2 className="text-bold text-violet-600 hover:underline">{props.title}</h2>
      </Link>      
      <h4 className="text-sm text-slate-400">{props.date}</h4>
      <h3 className="text-slate-700">{props.subtitle}</h3>

    </div>
	)
}

export default PostPreview;
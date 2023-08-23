import { getSinglePost } from "@/lib/getAllPosts";

const page = async ({ params }) => {
  const { postDetails } = (await getSinglePost(params.id)) || {};
  console.log(postDetails);

  return (
    <>
      <div className="mx-14 text-center ">
        <div className="w-[50%] m-auto">
          <article className="flex flex-col shadow my-4 text-justify">
            <div className="flex flex-col justify-start p-6">
              <h1 className="text-2xl font-bold pb-3">{postDetails.title}</h1>
              <p className="pb-3">{postDetails.content}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default page;

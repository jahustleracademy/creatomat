import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

async function getUser() {
  const session = await auth();

  await connectMongo();

  return await User.findById(session.user.id).populate("boards");
}

export default async function Dashboard() {
  const user = await getUser();

  return (
    <main className="bg-base-200 min-h-screen">
      <section className="bg-base-100 px-5 py-3 flex justify-end">
        <ButtonLogout />
      </section>

      <section className=" max-w-5xl mx-auto px-5 py-12 space-y-12">
        <FormNewBoard />

        <div className="">
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length > 0
              ? user.boards.length + " Boards"
              : "No boards yet"}
          </h1>

          <ul className="space-y-4">
            {user.boards.map((board) => (
              <li key={board._id} className="bg-base-100 p-6 rounded-3xl">
                <a href={`/board/${board._id}`}>{board.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

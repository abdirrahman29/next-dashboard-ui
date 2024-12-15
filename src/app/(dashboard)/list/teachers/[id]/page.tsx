import Image from "next/image";
import Link from "next/link";
import BigCalendar from "@/components/BigCalender";
import Announcements    from "@/components/Announcements";
import Performance    from "@/components/Performance";
import FormModal from "@/components/FormModal";


const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              {/* User Profile Image */}
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="User Profile"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              <FormModal
    table="teacher"
    type="update"
    data={{
      id: 1,
      username: "deanguerrero",
      email: "deanguerrero@gmail.com",
      password: "password",
      name: "Dean",
      surname: "Guerrero",
      phone: "+1 234 567 89",
      address: "1234 Main St, Anytown, USA",
      bloodType: "A+",
      dateOfBirth: "2000-01-01",
      sex: "male",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
    }}
  />
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                {/* Blood Group */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="Blood Group"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                {/* Date */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="Joining Date"
                    width={14}
                    height={14}
                  />
                  <span>January 2025</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/mail.png"
                    alt="Email"
                    width={14}
                    height={14}
                  />
                  <span>user@gmail.com</span>
                </div>
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/phone.png"
                    alt="Phone"
                    width={14}
                    height={14}
                  />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Attendance Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="Attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* Branches Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="Branches"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* Lessons Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="Lessons"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* Classes Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="Classes"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href="/"
            >
              Teacher's Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href="/"
            >
              Teacher's Students
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaYellowLight"
              href="/"
            >
              Teacher's Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href="/"
            >
              Teacher's Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSky"
              href="/"
            >
              Teacher's Assignments
            </Link>
          </div>
        </div>

        <div>
          <Performance/>
          <Announcements /></div>
      
      </div>
    </div>
  );
};

export default SingleTeacherPage;




import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "3 orang team",
      title: "Kerja sama",
      description: "Untuk membuat konten berkualitas, kami memiliki tim untuk terus memberikan informasi dan update seputar anime.",
      image: userOneImg,
    },
    {
      name: "Berita panas",
      title: "Topic yang sedang viral",
      description: "Kami sebagai Blog website yang memberikan berita seputar anime akan menampilkan banyak informasi yang sedang trending dan panas untuk dibicarakan.",
      image: userTwoImg,
    },
    {
      name: "Pembahasan yang terpilih",
      title: "Artikel yang berkualitas",
      description: "Selain banyaknya hal di atas, kami memperhatikan kualitas artikel kami, agar relevan untuk banyak orang.",
      image: userThreeImg,
    },
  ];

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                {testimonial.description}
              </p>
              <Avatar
                image={testimonial.image}
                name={testimonial.name}
                title={testimonial.title}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

export default Testimonials;

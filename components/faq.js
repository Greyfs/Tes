import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Apa kita bisa jadi bagian dari kalian?",
    answer: "Oh ya jelas, Website ini untuk komunitas terbuka untuk siapa aja",
  },
  {
    question: "Apa isi Konten Starlynime aman dan tidak ada NSFW?",
    answer: "Kami akan membatasi segala konten sensitif, jika ada akan kami beri peringatan",
  },
  {
    question: "Apa gambar di Gallery bebas pakai?",
    answer:
      "Ya, karena itu semua di buat dengan Teknologi Artificial intelegen",
  },
  {
    question: "Dimana komten utama kalian?",
    answer:
      "Kami ada di Youtube kami ada untuk semua orang di Youtube",
  },
];

export default Faq;

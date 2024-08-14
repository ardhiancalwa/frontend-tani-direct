import React, { useState, useEffect } from "react";
import BlogArticle from "../../components/common/blog_article";
import Skeleton from "../../components/common/skeleton";
import LoadingScreen from "../../components/common/loading";

const ContentArticle = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch articles
    setTimeout(() => {
      setArticles([
        {
          title: "Musim El Nino: Pengancam Harga Pasar Indonesia",
          text: "Musim El Nino merupakan fenomena alam yang ditandai oleh pemanasan suhu permukaan laut di wilayah Pasifik bagian tengah dan timur. Fenomena ini sering kali membawa dampak besar pada pola cuaca global, termasuk di Indonesia. Dampak tersebut tidak hanya dirasakan dalam bentuk perubahan curah hujan dan suhu, tetapi juga berdampak signifikan pada sektor pertanian.",
          time: "24 June 2024 ・6 min",
        },
        {
          title: "Harga Pasar 24 Juni 2024: Harga Cabai Merah Keriting Turun",
          text: "Pada tanggal 24 Juni 2024, pasar pertanian di Indonesia menunjukkan beberapa perubahan signifikan, khususnya pada harga cabai merah keriting. Penurunan harga cabai merah keriting menjadi sorotan utama karena komoditas ini sering menjadi indikator fluktuasi harga di pasar sayuran. Dalam blog ini, kita akan membahas faktor-faktor yang menyebabkan penurunan harga cabai merah keriting, dampaknya pada petani dan konsumen.",
          time: "24 June 2024 ・6 min",
        },
        {
          title: "Harga Pasar 17 Juni 2024: Harga Cabai Rawit Menurun",
          text: "Pada tanggal 24 Juni 2024, pasar pertanian di Indonesia menunjukkan beberapa perubahan signifikan, khususnya pada harga cabai merah keriting. Penurunan harga cabai merah keriting menjadi sorotan utama karena komoditas ini sering menjadi indikator fluktuasi harga di pasar sayuran. Dalam blog ini, kita akan membahas faktor-faktor yang menyebabkan penurunan harga cabai merah keriting, dampaknya pada petani dan konsumen.",
          time: "24 June 2024 ・6 min",
        },
        {
          title: "Gebrakan Pemerintah Dalam Mengatasi Lonjakan Harga Pasar",
          text: "Lonjakan harga pasar, khususnya produk pertanian, seringkali menimbulkan kekhawatiran bagi masyarakat. Harga yang tidak stabil dapat mengganggu ekonomi rumah tangga dan kesejahteraan petani. Untuk itu, pemerintah perlu melakukan langkah-langkah strategis guna menstabilkan harga dan memastikan ketersediaan bahan pokok.",
          time: "24 June 2024 ・6 min",
        },
        {
          title:
            "Harga Pasar 10 Juni 2024: Harga Bahan Pokok Naik Semua, Kecuali Daging",
          text: "Pada 10 Juni 2024, pasar bahan pokok di Indonesia mengalami kenaikan harga yang signifikan pada hampir semua komoditas, kecuali daging. Kondisi ini menarik perhatian banyak pihak, dari konsumen hingga pengamat ekonomi. Dalam blog ini, kita akan membahas penyebab kenaikan harga bahan pokok, mengapa harga daging tetap stabil, serta dampak yang ditimbulkan pada berbagai sektor.",
          time: "24 June 2024 ・6 min",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        articles.map((article, index) => (
          <BlogArticle
            key={index}
            title={article.title}
            text={article.text}
            time={article.time}
          />
        ))
      )}
    </div>
  );
};

export default ContentArticle;

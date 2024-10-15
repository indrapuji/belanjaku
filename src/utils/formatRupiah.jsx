const formatRupiah = angka => {
  let reverse = angka.toString().split('').reverse().join('');
  let ribuan = reverse.match(/\d{1,3}/g);
  let rupiah = ribuan.join('.').split('').reverse().join('');
  return 'Rp. ' + rupiah;
};

export default formatRupiah;

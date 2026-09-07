export function whatsappLink(number: string, productName: string) {
  const text = `Hi, I'm interested in the ${productName}. I'd like to know more about this product.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export default function decorate(block) {
    const h1 = block.querySelector('h1');
    if(h1){
        const h1Text = h1.innerText;
        h1.innerText = h1Text + '\nText from Hero block scrip, Have fun..!';
    }
  }
  
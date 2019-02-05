class Dino
{
  constructor(name)
  {
    this.name = name;
    this.dom = null;
    this.specify="";
    this.dobject=null;
  }
  SetDOM(dom)
  {
    this.dom = dom;
  }
  Specify(s)
  {
    this.specify = s;
  }
  Update(object)
  {
    this.dobject = object;
      if(this.specify=="")
      {
          this.dom.innerHTML = this.dobject.Get();
      }
      else
      {
          attr = document.createAttribute(this.specify);
          attr.value = dobject.Get();
          this.dom.setAttributeNode(attr);
      }
  }
}

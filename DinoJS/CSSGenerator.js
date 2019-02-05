class CSSGenerator
{
  constructor(name)
  {
    this.name = name;
    this.generated_text = "";
    this.type = "";
    this.for = "";
    this.properties = [];
    this.num=0;
  }

  Get()
  {
    return this.generated_text;
  }

  addProperty(name,value)
  {
    this.properties[name] = value;
    this.num+=1;
  }

  generate_inl()
  {
    let res = "";
    for(let p in this.properties)
    {
      if (this.properties.hasOwnProperty(p))
      {
        res += ""+p+":"+this.properties[p]+";";
      }
    }
    this.generated_text = res;
    return res;
  }

  generate_ext()
  {
    text += this.type;
    text += this.type+"{";
    text += generate_inl();
    text += "}";
    return text;
  }


}

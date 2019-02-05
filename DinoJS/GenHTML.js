function GetHTML(object)
{
  let HTML = "";
  if(Array.isArray(object))
      {
        let len = object.length;
        for(i=0;i<len;i++)
            {
              HTML+=GetHTML(object[i]);
            }
      }
  else{

  let datas = "";
  let details = "";
  for(let key in object)
  {
    if (object.hasOwnProperty(key))
    {
      if(key[0] == '_')
        datas+=" "+key.slice(1)+"="+object[key]+" ";
      else if (key[0] == '$')
      {
        details += GetHTML(object[key]);
      }
      else
        details += ""+object[key];
    }
  }
  HTML += "<div"+datas+">"+details+"</div>";
  }
  return HTML;
}


class HTML
{
  constructor(name)
  {
    this.name = name;
    this.Text = "";
    this.object = null;
  }
  SetObject(object)
  {
    this.object = object;
  }
  Get()
  {
    this.Text = GetHTML(this.object)
    return this.Text;
  }
}

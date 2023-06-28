var Presentation="Hi, I'm Amine 👋 A Desktop and Web Developer."
let i=0
const Fast=70
const Slow=85
let FirstSpeed=Math.floor(Presentation.length/3)
let SecondSpeed=FirstSpeed+FirstSpeed;
function TypeWriter()
{
    if(i<Presentation.length)
    {
       var PresentationParagraph= document.getElementById("Present")
       PresentationParagraph.innerHTML=PresentationParagraph.innerHTML+Presentation.charAt(i)
       i++
       if(i==16)
       {
        setTimeout(TypeWriter,500)
        return
       }
        
       if(i<=FirstSpeed)
        setTimeout(TypeWriter,Slow)
       else if(i>FirstSpeed && i<=SecondSpeed)
        setTimeout(TypeWriter,Fast)
       else 
       setTimeout(TypeWriter,Slow)
    }
}
function ShowSection(section)
{
    document.querySelector("section[class*='active']").classList.remove("active")
    if(section.getAttribute('class').includes("house"))
    {
        
        document.getElementsByClassName("section home")[0].classList.add("active")
        return
    }
    if(section.getAttribute('class').includes("user"))
    {
        document.getElementsByClassName("section about")[0].classList.add("active")
        return
    }
    if(section.getAttribute('class').includes("briefcase"))
    {
        document.getElementsByClassName("section portfolio")[0].classList.add("active")
        return
    }
    if(section.getAttribute('class').includes("blogger"))
    {
        document.getElementsByClassName("section blogs")[0].classList.add("active")
        return
    }
    if(section.getAttribute('class').includes("address"))
    {
        document.getElementsByClassName("section contact")[0].classList.add("active")
        return
    }
}
window.onload=function(){
    
    let SectionBtns=document.getElementsByClassName("control")
    for(let i=0;i<SectionBtns.length;i++)
    {
       if(SectionBtns.item(i).getAttribute("id")=="switch-mode")
       {
          continue
       }
        

        SectionBtns.item(i).addEventListener("click",()=>{

            document.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
            SectionBtns.item(i).classList.add("active-btn")
            const section=SectionBtns.item(i).getElementsByTagName("i")[0]
            ShowSection(section)
        })
    }
    

    setTimeout(TypeWriter,900);
    document.getElementById("switch-mode").addEventListener("click",()=>{
        document.body.classList.toggle("light-mode")
    })
    
}

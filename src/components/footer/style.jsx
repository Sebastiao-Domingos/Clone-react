import styled from 'styled-components'
export const SFooter = styled.footer`
   position:relative;
   width:100%;
   min-height:30rem;
   background:#4c5a7d url(${props => props.photo }) no-repeat center; 

   >div{
      display:flex;
      padding:2rem 7rem;
      justify-content:space-between;
      width:100%;

      &:first-child{
         height:27rem;


         >div{
            width:30%;

            >div{
               display:flex;
               margin-top:1.5rem;
               >a{
                  text-decoration:none;
                  min-width:40px;
                  height:30px;
                  background:#fff;
                  margin-right:10px;
                  display:flex;
                  >svg{
                     font-size:1.5rem;
                     margin:auto;
                     color:#797979;
                  }

               }
            }

            h2{
               color:#FFF;
            }
            p,li a{ color:#ccc ; text-decoration:none }

            ul{
               list-style:none;
               li{
                  margin:10px 0;
                  padding:5px 0;

                  &:not(:last-child){
                     border-bottom:1px dotted rgba(204, 204, 204, 0.3);
                  }
               }
            }


         }
      }

      &:last-child{
         background:#333333;
         align-items:center;
         height:2rem;
         p{
            width:100%;
            text-align:center; 
            color:#cccc;
            >span{
               color:#FFFF;
            }
         }
      }
   }
`;
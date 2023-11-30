import React from 'react'
import './Inhome.css'
import Home from './Home';
export default function Inhome(props) {

    const items = [
        { id: 1, name: 'Item 1', price: 10, img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8A8gMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQECAwYABwj/xAA/EAACAQMBBQYCBwUIAwEAAAABAgMABBEhBRIxQVEGEyJhcYEUkTJCUqGxwdEVYnKC4QcjM0NTkqLwFlRjJP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAApEQACAgIBBAIBAwUAAAAAAAAAAQIRAxIhBBMxURRBBRUyYSJCUpGx/9oADAMBAAIRAxEAPwD5sBVlXJ44q27U4r6E8aye5I1P41YR6VAyNBwq6kigTZATyrRVPQ1Klq0Ut1pis8q+RomJyvFRms1J61dRTJN+9LLgge1XULga/dWSrWyLRRLZogomNXkAGdBw8qxRa2UaY5UyTVVA55rVBVEX5Vui60CNI1omNayjFGW8TSOqICzMcKANSamXHI/JZFoiNaJj2Tf7xT4ObeVt0+A4B9aZR9nNp4Ym3AwOG+uvprXPLLD2axxzfhF9m7I+PtO9iZVdDhl+0PyNdQyyR28a/VVcYNKdiWm0IoSEVYwSdHODp5UwWd5YiJNHVirDzHGvPyycpeT0MMdY+KYrgtVgmZ1A4+H90UVFpWnd73KpWMihysahR4vgYU1tFg1gV1rVD4hUMsOjFEqaxt1VkyeNEBcCsmbR8HmAIGahcAYAxU+tULDNIYBtEyhgpOIzwxzoLGadSLHKm665FUjtgh3VUGNhnXrWinSM5QbYq3G+w3+016noBHWvUdwO0flLdr27RBTHGvble7Z5FmIWrBa1SIsQFBJPADnRHwVwEd2idVTjlcYotADKtaKtWCY41dVpiPKtaqtSq68K0UUCs8q1si1CrWyLTJJQVsgqEStkSgTLotGWttLPII4InkcgnCjJwKwjSuo7GwSptFLj6MQBBzzrPLPSDZUIbySA9l7HnuZYmdGWEybr40YdTg13FpY7PsFjWKFXZM4kcAtg+dWktEN680UjKH1fGoz/ANx8q1ntN1AyuWbkMV5eXM8h6WLD2wyO5jk+kNRrrVWucK2CF00JpfGw4ZGRxHSovO7NuzSNhV6dax1Vm27orJeSKjKJSwbnVIbhywDa69KWLMWbiT50y2eA7EkEkDQ1q4qKMVJyY0RM6gVoIKtGyBPEfnpUtKpGAR8657Z0UjB4G5D3qO43fEXFay3Bij8PGh4pFmL5YrmnyHARDLht0cDRhcYoKNG8JHDnWpY8s0mUizycay7wVV2zWeM0qE2bCYVoJ9ONC7p6H5VIFOh2Fd/51FY7lepDtnznZttsFbyOdFjjdVCbjcPkedN9o7I2NKkl5LYwyMFy2BxxXN3EmyLiPfLL3nUg5oY7bmsCIYJO/gx9FuPzr0O3KT4ZwbxS5RzglCbSe4jiEWHJVcaL00o+e8+LUd7NjTDcvuoe+kN3OZdzcJ5UP3Zzwrs1vycmwwezgvo0Fmu66DDOdA1S/Zy6jsjd76MBxUGg1DjgSPTSiIpZ+7MZlbcPFc6UVJeGFr7HWyey1tcRxNdTSYfxHcIGB6YofbnZs7MBlguElg0IJ0IydBWVtM8UeBPIrcBhuXSum2HfwzW62lyBKOJ7wfjWUnkg9r4NIqElqcOsdbInlX0ObsrsyeR5wpjLA5VWwM9aD2Z2cSxvM3YSZNCjAnAPmKa6qDVil080zkFixxFNIdh7QkjDi3IUrvAkjUV9Jn2bZXsDG5tY2Yjd3wgyB5Gku0phYyhMZRT4EGuBWS6tz4iuS5dNry3wcZ8HcoSrQSAjjlaZ2V1cpumEsu59QKdaaR3s015Eg/u4s6kDjT1biG1TfUak66UZM78NCx4U/DNNn3LzW3evCVZgCBTEsssIZQQ2NPKgxtKA47tstzGKme+i3U3HHDlXBJNvwd6aSpslYCqFkUZP0mPGlW23mjPd72IWOQDxoya9k3FERyBxxSu9neV2EoAPRuVaQTszySVcGMGpFdFYiOOEEatzrnrfAIzTSG5wANMVWTknG6DXuM5AAxXo/FyOteW3V03lbxY4VfAiTU+/nWJub2qgFt47wPnWhjgQEqACelJZr143ODpWC30m8TvfOjRi7i8DpZ+7G6Dk0RFLvnXFKkkeeMOePIAVvazbi5YcDik4lKQwkjGM1RVUeIn2oWXaCgYFC/tLHKlqx7IcLJGAckUBdXao+EpXLdlmJBxk1k0uRx1qlAl5PQx/aDdK9SvvK9VaondnzkWx+yag22vD5117WFqyghSG8jV02TCzARgmu75COHsM434byFW+Dbd3txt088aV2zbI3d3CjGea0fa7M3dSydRil8lIpdOz50LXoDREWzZpPoxj3IFfQGtWt2L90rA8TWcDW6EsYYzniN0ZqX1PpB8f2zkR2dvQoZ0RVPMv+ldB2U2TFGzSXUG/JnAzquOtNY5rVEZUiXdxw3cVSLaMSjdRd0VnPNOSaNI4oRaY5lhiONzQ86ze1TAOcY4YoWKdpMFAzE9BRURm4EnPQiuXlHTaZSGAAkB5ACeJoG92eYpDuuHDa4cZxRc73A0AGlAyvIxyx16VpFy9kS1JgLhD8SVaJBoSMEVzHa/tdb7Jkjto/FvKWYoM4/Lr8qTdse1htUu7Du91iAgEhxk9fTFfPJrnv5Qc96xA5k93ga/d+dc+XO7qJFNqkdPc9qtoSxxG0dPE2d4P4hzBI4Ae9a7I7S7XEywMjSCNCzqgByAfEcnhxFcjDFJH3UixxRd9nu3B3iy9fIZwM8+VRFLI6mf4lY3nLKxUkMo46HrnT8eNY7zvyHbPrMPbC2QK7q65AJG6SV5cs65/Knpv4toKk4B38ccYr4XBNtDZyBlbS4G9uZ0ZRyPmOmnCu57NdtLSWCKxktgsigIjRkleWMg66/pxroxZ+f6yXFo7re10ou2fUZ1oi22VK8EchTBZQSrcV8qu1kInxva9K6dovwNRaMxdmGQnUeVbfGxygAjhwFT8OHHiNSlmmeIqHqaLYzdIpl0yDWT2Tqu8KYpbonIVp3KldM4pbD1sVQvLFgbxAHQ0R3xKak0R3AJqwt1xQ2CQA6Ftaxkib6tNO4Qcq0jjjVslfajag1sRG3lOu6a93TjipFdEZjkbseB5VWYhsN3fi88Ubsei9nP92/SvU5yPsD5V6jYWogFkVOCCCK1jhdGBBbNNXuLaXASaFj1DCpijV3GCMdaXdTXItKAwJt0l2OOQqoeUag0ZdTwRndlmhTHVwKCk2ps2P6d1H/Kd78Kh5scfMkM0klmkXdLChGVwdFFYz9otkRcHlf8Agib86Eftds3OEtrhvUAfnUfNwL+5EtWFvC+d7OM8QK9HAd4Z4Vge0tkFDGBhnkWFZntns9eFnK/owFL9S6fxsRojpoHkwBGNxSdcUwVyq4xkVx0Xbmz3dbGRR1Mgo6Ltps5gA0Ug9DmsZddgb/cbRaQ7nRmHhWlW1MWlnNc3UbdzGuW8Jb7hWkParZb6b0o9Y6KO2bGaJgl2UyOONR89KuPWYXwpIGoyPzHtq7F5dt3CnLyYVM77HJ0GeZ/Wsu7dbjxszjd31MTBiRg65Bxpg/Kp2l3c+0GOzombJ8IVSd45446+lDTWk0TlLuN0cHHd6Bk9R+tJGiSo3knWbLSp/fZ+kU0yAANBoSQPvNaTX081sYmWLue/MgSJN3xkdePAfdQTqpYOAwAYLu72ToOI5VTV8b2CeYB8R/SigoOjuIwAquXjzkKPCB159Bxo7Z82Zg0DKgLAL4td4nT76XybMkjSN3jmjikGQzoRj3xwoi1PwckfeSKE3gQCSM+Wc/fU8fRDS+j9RRTuLWFMZkCDfbqcVkULHePGkOwO0Dz7HtJmgRu8hU7yMSMep/WmibViOrROKhfk+li6cqZL5DFQ9KuF/doX9sQ58MLn3AqDtuMf5H/MUP8AK9L/AJf9GooMC9K1SLe03sUsO3oBxix/MKlNvWBPilKn0z+FXH8j00/ExqkNkiTnUvHwIFBQbUsZThLqInoWwfvo9JBIPAwbHNda3WSMuU7K4MWjPSoCCiBgiqkCrsNSqqpxrrXimDjFWAFX5UWOkY90nSvVtXqVhwfCooZcYHeD0FEpDcjGHmHTU12A2EP9fPqn9an9j7n1x7J/WvjfkejHk5MW923Nz/NVlsLyTRQfds/lXXLsw8pAB/D/AFq37PZeEo/2/wBajvMXJyabDuG/xGcDyFbp2eckYJ9WzXTizYDV8+1e+Gk+3j0FDzyE0c9/427DV1P8tap2ZXIJlX3TNPltpP8AUHvV/hbg8GX51LzT9hQnj7PKv+eAP3YxRUex4E4yyH+WjTaXg+iyH+avfBXzc4x6vUPJJ/Yq/gyWygUYXJ9RWd1ZW9xay2zhgkilSUbdPsQKLGz7j/MuYB6ZNbLs+Mf41yT/AAgCpUpp2gpnKW3YzYFrdQ3MFrKssJ3lZZ249aZbS2Xs/adnNazwJiUEFwg31JOSQcaHNPGfZ1v/AIkgyObHNK7vtbsS10SdpGHKBN77xW6ydTNp2+Bu/tnJWP8AZ5ZWe0beVYxd2wDieO5gDs+eGNMDGmuM6ceqI9hoZu2G0Nn2cstvBDAlwiBC5XeJG7nI0H4Guvvf7QOK2Oz5GOcB5ZMD5CuY2ftvbFt2jvttFYZJbyNY2QqQFVcYA104V6OLJ1VSlKXNcD3XNs7yHY9mmz47EWHeWyABY5k3xpw4551yW2v7OEvNtW0trFItnJvC4RSF7nw+Erp18jTZO2t8cd5s8MPKY/pRcXa1WI72wmUc91wa48XysMnKMvJCmk/IRsHYcuw9mR2EMk8yRsd13YZwSTjhRrW11g4SQUNF2i2e5G8ZU/iFGw7T2fJ9C6UHoTiuTJCcpOUnywtN+QOS1uDw70HzGaGezuD9Z/PTFdAJY2HgnBH7rCqlgeEp9xSSa+yq/k5ia0u8eEtj1NCm3v1zgb3ka68nzJ+6q92pOTn51ezRNP2ccyXvOBs+Wv41pEu0wR3Mc6EfZGK63dArx3R6+tNZWvCKVimyuu0UQH/6ZN3/AOj7345pxBtjaqYEwgkH8JFZl15kn3rMunT5mt49Znj+2VD2Y1j2+R/i2hz+69art+HOttKPQikZkXpVWlHL7hW6/J9UvsN5HQft6D/15v8Aj+terne+HU/I16n+qdV7X+g7kjNr91OONSt87Z0xSYS9AQPWpWXUDJrztB7Dr42TPCo+KmJ4ge9J+9ZWwWPzq3f4560tA2HIuXxkvU/EtybNJxPva8T6Vosx8xS1CxstxvcTmtFlXH08UnEmeZ9z+VXExHM/OlqCaHImbk2asJjzOvrSYXJGm97HH5VZLoEAEjNLUdjnvgdC5FVdEkBG8ADS0TcyMVb4hsbwPyo5AxvezsV2xLuCCc4bJAoM9j4/qSR46DNNku9PrD1NX78HUHBrRZskfsnSLEv/AIcmPpJ7NVl7HRY+n99O1uOpH51cXKZ46+VD6jJ7J7cRIOyVuOMr+1XXs7aRaGWU9NaercjkK80yscMB8ql9Rk9j7cRONjWS8pG9X/pU/AWkf0YT7tTIiJxoSPOqPbozEK/3Ud1vyxaIEQpGPDGnyq6XJGgVPlWpsX8j/Cawa1kTQ71CkgpmnxRA1VfY1DXgH0hj3rB4JMfRB9axdSPqYqlJEvYLN0Kye5Xm+PWhCzZKgNoOtVLH7Le9UibkFG5A4SJVDddHjPtQL7+fFpWbCE6uhPtVJEtsON2/LdqPiZPrBCKBJhxwIHpUDuRwz8qqkDcg/wCIP2FqaCzF0PyqKBXIXi7wNdPao+KXjkilSzjy9q1FxgZwR6Vt26NA9blmbIyfeiEnyMbudOdKu8Y4CsQTVHuO7cDIJPUVOljHSzKOBwevGp+I3SCpJHPXSlCXOu6S/wA6sJP7wBCwJGddRSeOgG5udMjC/vDnVviDujxk40GvGlAlw2Wzxwcc63+JGi+PB6NwqXABksnUAflVhMByGnOl4lddFY444Jq4mbPLhnOKnUaGS3AxpjPqf0q5uVzhtT7n8qXCbEefrE8auJcJhzn1JqdR2Hd7g+EZ9sVdZ2wc48gdc/8AfeliyjjvNvEcBwrdJMgggggcRxpOI7DlmXAw4U9Aa1W4UHUn1zS3ORvA4apR2H4aVLihWN0uV6/PWtPiAaThyzceVXVwxPHNQ4BY2E6jQZz51cSgaA/dSnvQBwO9UiXhS0HY1+JAIBYg+tbrckab+aTLNvZ3lB06VfvehJx1HCk4iscCaM6sinzA1rzCB+IKnrSnvWU8eGtSJHViVwSeOdKWpSkMmtInH1SPTBoSWzQHwjHXXQ1RZSuCdM861Fw6DxDIotoLsBmtXUjAznpQ7xaajFOBc7x0UV52jkBDIM8zVrI0TSOfeNwTry4eVDOCD9Ee/GugksYnJKZBx7UFNYyKCdCRW0cqZLiK949BXqL7l/8AT+8VFXshas//2Q=='},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        { id: 1, name: 'Item 1', price: 10, img:'image-link'},
        
      ]

  return (
    <div>
    <header>
        <h1 style={{textAlign:'center', marginLeft:'40%'}}>Mens Wear Section</h1>
    </header>
    <section id="product">

    {
        items.map((item) => {
            return (
                <div class="product">
                    <div class="product-info">
                        <img src={item.img} alt='image'/>
                        <h4 style={{margin:'20px'}}>{item.name}</h4>
                        <h4 style={{margin:'20px'}}>{item.price}</h4>
                    </div>
                </div>

            )
        })
    }
            
   
</section>
    </div>
  )
}


/**********************************************************************
 *
 * kw/class/attr/kwAttrLink.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off

import { kwAttr }           from "./kwAttr";
import { kwLog }            from "@kw/kwLog";
import { kwtAttr }          from "./kwtAttr";
import { kwView }           from "@kwClass/view/kwView";


const sTAG: string = "Link";


export class kwAttrLink extends kwAttr
{
    constructor(
        attr: kwtAttr,
        sParent: string,
        view: kwView )
    {
        super(attr, sTAG, sParent, view);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

}

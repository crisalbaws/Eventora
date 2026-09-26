function s(i){let t=(i??"").trim();if(!t)return"Est\xE1s invitado";let n=!/^la familia\b/i.test(t)&&/\s(y|e)\s|,/i.test(t);return`${t} te ${n?"invitan":"invita"}`}export{s as a};

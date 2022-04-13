import React, {FC} from "react"
import Contact from "./Contact"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useContacts} from "../../hooks/useContacts"
import {FixedSizeList} from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"

interface Row {
    index: number;
    style: {};
}

const ContactList: FC = () => {

    const {contacts} = useTypedSelector(state => state.contacts)
    const {filter} = useTypedSelector(state => state.filterContacts)
    const {sort} = useTypedSelector(state => state.sortContacts)
    const contactList = useContacts(contacts, filter,{...sort} )

    const Row: FC<Row> = ({index, style}) => {
        const contact = contactList[index]
        return (
            <div style={style}>
                <Contact contact={contact} index={index}/>
            </div>
        )
    }

    if (!contactList.length) return (<i>List is Empty</i>)

    return (
        <AutoSizer>
            {({height, width}) => (
                <FixedSizeList
                    className="List"
                    height={height}
                    itemCount={contactList.length}
                    itemSize={170}
                    width={width}
                >
                    {Row}
                </FixedSizeList>
            )}
        </AutoSizer>
    )
}

export default ContactList